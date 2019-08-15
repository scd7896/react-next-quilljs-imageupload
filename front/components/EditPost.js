import React,{useState, useEffect} from 'react'


const EditPost = ()=>{
    let ReactQuill, QuillImageUploader, saveImgSrc, quill, ReactQuillImageUploaderRef,quillRef
    const [text, setText] = useState('')
    if(typeof window !== 'undefined'){
        ReactQuill = require('react-quill')
        QuillImageUploader = require('react-quill-image-uploader')
        saveImgSrc = QuillImageUploader.saveImageSrc
    }
    const modules = {
        toolbar: {
          container: [['bold', 'italic', 'underline', 'strike'], ['image'], ['video']],
          handlers: {
            image: () => {
              const { clientX, y: clientY } = window.event
              const position = { x: clientX, y: clientY } // position the plugin to show
              ReactQuillImageUploaderRef.toggle(position) // show or hide the plugin
              // toggle() is also ok
              // this.ReactQuillImageUploaderRef.toggle()
            },
          },
        },
      }
    useEffect(()=>{

    },[])
    const quillModules = {
        toolbar :[
        [{'header' : [1,2,3,4,5,6,false]}, {'font':[]}],
        [{'size':[]}],
        ['bold', 'italic','underline', 'strike', 'blockquote'],
        [{'list': 'ordered'},{'list' :'bullet'}], 
        ['link', 'image','video'],
        ['clean'],
        ['code-block'],
        [{'script' : 'sub'}, {'script': 'super'}],
        [{'indent': '-1'}, {'indent': '+1'}],
        [{'color': 'blue'}, {'background':'red'}]
        ]
    }
   
    const setContent = (e)=>{
        setText(e)
    }
    const saveContents = ()=>{
        
    }
    const uploadImageCallBack =(file, base64)=>{
        return new Promise((resolve, reject)=>{
            let src = "127.0.0.1"
            if(base64){
                src = base64
            }
            const uploadSuccess = false
            if(uploadSuccess){
                ReactQuillImageUploaderRef.insertImg(src)
                resolve({
                    data : {
                        name : file.name || '',
                        link : src
                    },
                })
            }else if(!uploadSuccess){
                setTimeout(()=>{
                    return reject()
                }, 3*1000)
            }else {
                resolve()
            }
            
        })
    }   
  
    return typeof window !== "undefined" && ReactQuill ? (
      <div>
          <label>
            <ReactQuill
            ref={el=>{
                quillRef = el
            }}
            placeholder = {'내용을 입력하시오'}
            modules = {modules}
            onChange={setContent}
            />
            <QuillImageUploader
                ref = {el=>{
                    ReactQuillImageUploaderRef =el
                }}
                isShowUploadFail = {true}
                isShowHistory = {true}
                quill = {quill}
                uploadCallback={uploadImageCallBack}
            >

            </QuillImageUploader>
        </label>
        <button onClick ={saveContents}>내용 저장해버리기~</button>
      </div>
      
    ) : null;
  }

export default EditPost