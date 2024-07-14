'use client ';
import EmailEditor,{EditorRef,EmailEditorProps} from "react-email-editor";
import React,{useState, useEffect,useRef} from "react";
import { DefaultJsonData } from "@/assets/mails/default";
import { useClerk } from "@clerk/nextjs";
import {useRouter} from "next/navigation";
import { Button } from "@nextui-org/react";

const Emaileditor = ({subjectTitle}:{subjectTitle:string}) => {

    const [loading, setLoading]= useState(false);
    const [jsonData,setJsonData]= useState<any | null >(DefaultJsonData);
    const {user} =useClerk();
    const emailEditorRef =useRef<EditorRef>(null);
    const history = useRouter();

    const exportHtml = () => {
        const unlayer = emailEditorRef.current?.editor;
    
        unlayer?.exportHtml(async (data) => {
          const { design, html } = data;
        //   console.log('exportHtml', html);
          setJsonData(design);

        });
      };

      const onReady: EmailEditorProps['onReady'] = () => {
        // editor is ready
        // you can load your template here;
        // the design json can be obtained by calling
        // unlayer.loadDesign(callback) or unlayer.exportHtml(callback)
    
        // const templateJson = { DESIGN JSON GOES HERE };
        // unlayer.loadDesign(templateJson);

        const unlayer:any = emailEditorRef.current?.editor;
        unlayer.loadDesign(jsonData);
        
      };
    const saveDraft=()=>{

    };


  return (
   <>
   {!loading && (
    <div className="w-full h-[90vh] relative">
        <EmailEditor minHeight={"80vh"} 
        ref={emailEditorRef}
        onReady={onReady}
/>
<div className="absolute bottom-0flex items-center justify-end gap-4 right-0 w-full border-t p-3">
    <Button
    className="bg-transparent cursor-pointer flex items-center gap-1 text"
    onClick={saveDraft}
    ><span className="opacity-[.7]">
        save draft 
        
        </span>
        </Button>
        <Button className="bg-[#000] text-white cursor-pointer flex items-center gap-1 border text-lg rounded-lg"
        onClick={exportHtml}>
            <span>
                Send
            </span>

        </Button>

</div>
    </div>
   ) }
   </>
  )
}

export default Emaileditor
