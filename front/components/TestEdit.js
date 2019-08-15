import React,{useState, useEffect, useRef} from 'react'
import Link from 'next/link'
import axios from 'axios'


const EditPost = ()=>{
    let ReactQuill
    let quillRef = useRef()
    let dropzone = useRef()
    let DropZone, ImageFile
    const [text, setText] = useState('')
    const [showContent, setShowContent] = useState('')
    if(typeof window !== 'undefined'){
        ReactQuill = require('react-quill')
    }
    
    
    const quillModules = {
        toolbar :{
            container : [['bold', 'italic', 'underline', 'strike'], ['image']],
            handlers :{
                image : ()=>{
                    const input = document.createElement('input')
                    input.setAttribute('type', 'file')
                    input.setAttribute('accept', 'image/*')
                    input.click()
                    input.addEventListener('change',async()=>{
                        console.log('이미지 변환됨')
                        const file = input.files[0]
                        const formData = new FormData()
                        
                        formData.append('image', file)
                        const quill = quillRef.current.getEditor()
                        const range = quill.getSelection(true);    
                        const res = await axios.post('http://localhost:3060/api/image', formData)
                        
                        quill.setSelection(range.index+1)
                        quill.deleteText(range.index, 1)
                        quill.insertEmbed(range.index, 'image',`../../uploads/${res.data}`)
                    })
                    
                    
                    
                }
            }
        }
    }
    
    const setContent = (e)=>{
        if(e.match(/^<p><img/g)){
            //여기서 변환 코드를 작성하자
            console.log('파일이 들어온것이여')
        }
        console.log(e)
        setText(e)
    }
    const saveContents = ()=>{
        let arr = text.split('<p>')
        arr = arr.filter((e)=> e !== '')
        arr =arr.map(el => '<p>' +el)
        console.log(arr)
        
        axios.post('http://localhost:3060/api/posts',{
            title : 'test',
            arr
        })
        // axios.get('http://localhost:3060/api/test')
        //     .then((res)=> setShowContent(res.data))
        //     .catch((err)=> console.error(err))
        // socket.on('connect', ()=>{
        //     console.log(socket.id)
        // })
        // webSocekt.onmessage = (e)=>{
        //     console.log(e.data)
        // }
        // webSocekt.onopen = ()=>{
        //     console.log(text)
        //     conn.send(text)
        // }
        // webSocekt.onerror = (message)=>{
        //      console.log(message)
        // }
        setText('')
    }
    useEffect(()=>{

    },[])
    return typeof window !== "undefined" && ReactQuill ? (
      <div>
          <label>
            <ReactQuill
                ref = {quillRef}
                value = {text}
                placeholder = {'내용을 입력하시오'}
                modules = {quillModules}
                onChange={setContent}
            />
        </label>
        <button onClick ={saveContents}>내용 저장해버리기~</button>
        <Link href = {{pathname : `/posts`, query:{id : 2}}} 
            as ={`/posts/2`}><a>내용 불러버리기</a></Link>
        <div>
            {showContent ? showContent: ''}
            <img src = "http://localhost:3065/uploads/trabimg1565847349122.jpg" />
            개같은
        </div>
      </div>
      
    ) : null;
  }

export default EditPost