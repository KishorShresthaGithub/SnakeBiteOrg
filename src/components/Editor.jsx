import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Editor = (props) => {
  return (
    <>
      <CKEditor editor={ClassicEditor} {...props} />
    </>
  );
};

export default Editor;
