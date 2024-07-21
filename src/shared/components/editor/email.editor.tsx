// 'use client ';
// import EmailEditor,{EditorRef,EmailEditorProps} from "react-email-editor";
// import React,{useState, useEffect,useRef} from "react";
// import { DefaultJsonData } from "@/assets/mails/default";
// import { useClerk } from "@clerk/nextjs";
// import {useRouter} from "next/navigation";
// import { Button } from "@nextui-org/react";
// import { saveEmail } from "@/action/save.email";
// import toast from "react-hot-toast";

// const Emaileditor = ({subjectTitle}:{subjectTitle:string}) => {

//     const [loading, setLoading]= useState(false);
//     const [jsonData,setJsonData]= useState<any | null >(DefaultJsonData);
//     const {user} =useClerk();
//     const emailEditorRef =useRef<EditorRef>(null);
//     const history = useRouter();

//     const exportHtml = () => {
//         // const unlayer = emailEditorRef.current?.editor;
    
//         // unlayer?.exportHtml(async (data) => {
//         //   const { design, html } = data;
//         // //   console.log('exportHtml', html);
//         //   setJsonData(design);



//         const unlayer = emailEditorRef.current?.editor;

//         unlayer?.exportHtml(async (data) => {
//           const { design, html } = data;
//           setJsonData(design);

//         });
//       };

//       const onReady: EmailEditorProps['onReady'] = () => {
//         // editor is ready
//         // you can load your template here;
//         // the design json can be obtained by calling
//         // unlayer.loadDesign(callback) or unlayer.exportHtml(callback)
    
//         // const templateJson = { DESIGN JSON GOES HERE };
//         // unlayer.loadDesign(templateJson);

//         const unlayer: any = emailEditorRef.current?.editor;
//         unlayer.loadDesign(jsonData);
        
//       };

//       const saveDraft = async () => {
//         const unlayer = emailEditorRef.current?.editor;
      
//         if (!unlayer) {
//           toast.error("Email editor is not loaded");
//           return;
//         }
      
//         unlayer.exportHtml(async (data) => {
//           const { design } = data;
//           try {
//             const res = await saveEmail({
//               title: subjectTitle,
//               content: JSON.stringify(design),
//               newsLetterOwnerId: user?.id!,
//             });
      
//             // Log the response to inspect its structure
//             console.log("Response from saveEmail:", res);
      
//             if (res) {
//               if (res.message) {
//                 toast.success(res.message);
//                 history.push("/dashboard/write");
//               } else {
//                 toast.error("Response does not contain a message");
//               }
//             } else {
//               toast.error("No response from saveEmail");
//             }
//           } catch (error) {
//             console.error("Error saving email draft:", error);
//             toast.error("Failed to save email draft");
//           }
//         });
//       };
    




//     // const saveDraft=async ()=>{
//     //   // const unlayer = emailEditorRef.current?.editor;
//     //   // unlayer?.exportHtml(async (data)=>{
//     //   //   const {design} = data ;
//     //   //   await saveEmail({
//     //   //     title:subjectTitle,
//     //   //     content: JSON.stringify(design),
//     //   //     newsLetterOwnerId:user?.id!,
          
//     //   //   }).then((res: any)=>{
//     //   //     toast.success(res.message);
//     //   //     history.push("/dashboard/write");

//     //   const unlayer = emailEditorRef.current?.editor;

//     //   unlayer?.exportHtml(async (data) => {
//     //     const { design } = data;
//     //     await saveEmail({
//     //       title: subjectTitle,
//     //       content: JSON.stringify(design),
//     //       newsLetterOwnerId: user?.id!,
//     //     }).then((res: any) => {
//     //       toast.success(res.message);
//     //       history.push("/dashboard/write");


//     //     })
//     //   })

//     // };


// //   return (
// //    <>
// //    {!loading && (
// //     <div className="w-full h-[90vh] relative">
// //         <EmailEditor minHeight={"80vh"} 
// //         ref={emailEditorRef}
// //         onReady={onReady}
// // />
// // <div className="absolute bottom-0flex items-center justify-end gap-4 right-0 w-full border-t p-3">
// //     <Button
// //     className="bg-transparent cursor-pointer flex items-center gap-1 text"
// //     onClick={saveDraft}
// //     ><span className="opacity-[.7]">
// //         save draft 
        
// //         </span>
// //         </Button>
// //         <Button className="bg-[#000] text-white cursor-pointer flex items-center gap-1 border text-lg rounded-lg"
// //         onClick={exportHtml}>
// //             <span>
// //                 Send
// //             </span>

// //         </Button>

// // </div>
// //     </div>
// //    ) }
// //    </>
// //   )


// return (
//   <>
//     {!loading && (
//       <div className="w-full h-[90vh] relative">
//         <EmailEditor
//           minHeight={"80vh"}
//           ref={emailEditorRef}
//           onReady={onReady}
//         />
//         <div className="absolute bottom-0 flex items-center justify-end gap-4 right-0 w-full border-t p-3">
//           <Button
//             className="bg-transparent cursor-pointer flex items-center gap-1 text-black border border-[#00000048] text-lg rounded-lg"
//             onClick={saveDraft}
//           >
//             <span className="opacity-[.7]">Save Draft</span>
//           </Button>
//           <Button
//             className="bg-[#000] text-white cursor-pointer flex items-center gap-1 border text-lg rounded-lg"
//             onClick={exportHtml}
//           >
//             <span>Send</span>
//           </Button>
//         </div>
//       </div>
//     )}
//   </>
// );
// }

// export default Emaileditor










// chat gpt help


'use client';
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";
import React, { useState, useRef } from "react";
import { DefaultJsonData } from "@/assets/mails/default";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { saveEmail } from "@/action/save.email";
import toast from "react-hot-toast";

const Emaileditor = ({ subjectTitle }: { subjectTitle: string }) => {
  const [loading, setLoading] = useState(false);
  const [jsonData, setJsonData] = useState<any | null>(DefaultJsonData);
  const { user } = useClerk();
  const emailEditorRef = useRef<EditorRef>(null);
  const history = useRouter();

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml(async (data) => {
      const { design, html } = data;
      setJsonData(design);
    });
  };

  const onReady: EmailEditorProps['onReady'] = () => {
    const unlayer: any = emailEditorRef.current?.editor;
    unlayer.loadDesign(jsonData);
  };

  const saveDraft = async () => {
    const unlayer = emailEditorRef.current?.editor;

    if (!unlayer) {
      toast.error("Email editor is not loaded");
      return;
    }

    unlayer.exportHtml(async (data) => {
      const { design } = data;
      try {
        const res = await saveEmail({
          title: subjectTitle,
          content: JSON.stringify(design),
          newsLetterOwnerId: user?.id!,
        });

        console.log("Response from saveEmail:", res);

        if (res && res.message) {
          toast.success(res.message);
          history.push("/dashboard/write");
        } else {
          toast.error(res?.error || "Failed to save email");
        }
      } catch (error) {
        console.error("Error saving email draft:", error);
        toast.error("Failed to save email draft");
      }
    });
  };

  return (
    <>
      {!loading && (
        <div className="w-full h-[90vh] relative">
          <EmailEditor
            minHeight={"80vh"}
            ref={emailEditorRef}
            onReady={onReady}
          />
          <div className="absolute bottom-0 flex items-center justify-end gap-4 right-0 w-full border-t p-3">
            <Button
              className="bg-transparent cursor-pointer flex items-center gap-1 text-black border border-[#00000048] text-lg rounded-lg"
              onClick={saveDraft}
            >
              <span className="opacity-[.7]">Save Draft</span>
            </Button>
            <Button
              className="bg-[#000] text-white cursor-pointer flex items-center gap-1 border text-lg rounded-lg"
              onClick={exportHtml}
            >
              <span>Send</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Emaileditor;
