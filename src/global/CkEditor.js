import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const Editor = ({ setDescription, defaultDescription }) => {
  return (
    <CKEditor
      className='about'
      editor={ClassicEditor}
      data={defaultDescription || ''}
      onReady={editor => {
        // You can store the "editor" and use when it is needed.
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        setDescription(data)
      }}
      onBlur={(event, editor) => {
      }}
      onFocus={(event, editor) => {
      }}
    />
  )
}

export default Editor