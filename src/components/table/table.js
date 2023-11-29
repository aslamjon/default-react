import React from "react";
import styled, { css } from "styled-components";
import { useFlexLayout, useTable } from "react-table";
import { get, isBoolean } from "lodash";
import { formatDate } from "utils";

const TableStyle = styled.table`
  background: var(--container--bg);
  border-radius: 12px;
  width: 100%;
  border-collapse: collapse;

  overflow: hidden;
  outline: 1px solid var(--container--br);

  th,
  td {
    margin: 0;
    padding: 0.5rem;
    height: 46px;
    font-weight: 500;
    font-size: 12px;
    color: var(--table--head);

    letter-spacing: -0.01em;
    background: var(--container--bg);

    &:first-child {
      padding-left: 20px;
    }
    &:last-child {
      padding-right: 20px;
    }
  }
  th {
    text-align: left;
    color: var(--table--head);
  }
  tbody {
    tr {
      ${({ odd }) =>
        odd &&
        css`
          &:nth-child(odd) {
            td {
              background: var(--table--tr);
            }
          }
        `}
    }
  }
`;

const getDate = (cell) => {
  if (isBoolean(get(cell, "column.date")) && "format" in cell.column) {
    return <span className={"dateFormat"}>{formatDate(new Date(get(cell, "value")), get(cell, "column.format"))}</span>;
  }
  return <span>{cell.render("Cell")}</span>;
};

const defaultPropGetter = () => ({});

const defaultRowProps = {};

const defaultRenderRow = ({ rowProps: { key, style, ...rowProp }, cells, SubColumn, renderCells, rowIndex, rows, onClick }) => {
  return (
    <React.Fragment key={key}>
      <tr
        {...rowProp}
        {...{ onClick }}
        style={{ ...style, animation: `fadeUp ${100 + (rowIndex > 100 ? rowIndex * 10 : rowIndex * 80)}ms ease-in-out` }}
      >
        {renderCells}
      </tr>
      {get(rows, `${rowIndex}.original.subCol`) ? (
        <tr>
          <td className="subrow">{SubColumn(get(rows, `${rowIndex}.original`))}</td>
        </tr>
      ) : null}
    </React.Fragment>
  );
};

const defaultRenderCell = ({ cellProps, value }) => <td {...cellProps}>{value}</td>;

const renderCells = ({ cells, renderCell }) => cells.map(renderCell);

const getColumn = ({ cell, rowIndex }) => {
  if ("customColumn" in cell.column) return cell.column.customColumn({ column: cell.column, cell, rowIndex });
  else if ("date" in cell.column) return getDate(cell);
  else if ("number" === cell.column.id) return rowIndex + 1;
  else
    return (
      <span
        style={{
          ...(cell.column.ellips
            ? {
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }
            : {}),
        }}
      >
        {cell.render("Cell")}
      </span>
    );
};

export default function Table({
  columns,
  data,
  SubColumn = () => "",
  getHeaderProps = defaultPropGetter,
  getCellProps = defaultPropGetter,
  getColumnProps = defaultPropGetter,
  getRowProps = defaultPropGetter,
  rowProps = defaultRowProps,
  clickRow = () => "",
  renderRow = defaultRenderRow,
  renderCell = defaultRenderCell,
  ...rest
}) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useFlexLayout
  );

  return (
    <TableStyle className="table-styled" {...rest} {...getTableProps()}>
      <thead>
        {headerGroups.map(
          (headerGroup) =>
            headerGroup.getHeaderGroupProps().key !== "headerGroup_0" && (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps([
                      {
                        className: column.className,
                        style: column.style,
                      },
                      getColumnProps(column),
                      getHeaderProps(column),
                    ])}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            )
        )}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return renderRow({
            rowProps: { ...row.getRowProps(getRowProps(row)), ...rowProps },
            rowIndex: i,
            SubColumn,
            onClick: () => clickRow(row),
            rows,
            cells: row.cells,
            renderCells: renderCells({
              cells: row.cells,
              renderCell: (cell) =>
                renderCell({
                  cellProps: {
                    ...cell.getCellProps([
                      {
                        className: cell.column.className,
                        style: cell.column.style,
                      },
                      getColumnProps(cell.column),
                      getCellProps(cell),
                      get(cell, "column.id") === "number" ? { style: { color: "var(--table--number-td)", fontWeight: 600 } } : {},
                    ]),
                  },
                  value: getColumn({ cell, rowIndex: i }),
                }),
            }),
          });
        })}
      </tbody>
    </TableStyle>
  );
}
