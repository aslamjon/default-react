import { get, head } from "lodash";
import { useCallback, useMemo, useRef, useState } from "react";
import { fileUpload } from "services/api/api";

export const useFile = ({
  accept = "*",
  withoutRender = false,
  isUploading = false,
  uploadingUrl = "attachment/v1/attachment/upload",
  setLoading = () => "",
}) => {
  const [state, setState] = useState();
  const fileRef = useRef();

  const input = useMemo(() => document.createElement("input"), []);

  const onChangeHanler = useCallback((e) => {
    let file = head(e.target.files);
    if (isUploading) {
      const formData = new FormData();
      formData.append("file", file);
      setLoading(true);
      fileUpload(
        formData,
        uploadingUrl,
        ({ data }) => {
          setLoading(false);
          withoutRender ? (fileRef.current = get(data, "[0]", null)) : setState(get(data, "[0]", null));
        },
        () => setLoading(false)
      );
    } else withoutRender ? (fileRef.current = file) : setState(file);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clickHandler = useCallback(() => {
    input.type = "file";
    input.accept = accept;
    input.onchange = onChangeHanler;
    input.click();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [withoutRender ? fileRef : state, clickHandler];
};
