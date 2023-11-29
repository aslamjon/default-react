import styled from "styled-components";

export const TabsStyle = styled.div`
  .tabs {
    &__header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;

      &__tab {
        font-weight: 600;
        font-size: 15px;
        display: flex;
        align-items: center;
        text-align: center;
        color: var(--text--grey);
        border-radius: var(--br);
        padding: 8px 15px;
        transition: 0.2s;
        height: 40px;
        cursor: pointer;
        white-space: nowrap;
        &:hover {
          background: var(--light--green);
          opacity: 0.8;
        }

        &.active {
          background: var(--light--green);
          color: var(--green);
        }
      }
    }
  }
`;
