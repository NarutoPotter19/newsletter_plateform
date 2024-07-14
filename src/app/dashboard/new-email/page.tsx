'use client';
import { ICONS } from "@/shared/utils/icons";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Emaileditor from "@/shared/components/editor/email.editor";


const Page = () => {

const searchParams = useSearchParams();
const subject: string = searchParams.get("subject")!;
const subjectTitle = subject.replace(/-/g,"");
// this is using the regexp where all the - of subject string is 
// replace by "" . and g represent global means all the ocurence is replced.

  return (
    <div className="w-full flex bg-slate-50">
      <div className="w-full p-5 bg-white rounded-r-xl">
{
  /* ack  back arrow */
}
<Link 
href={"/dashbaord/write"}
className="opacity-[.7] w-min flex text-xl items-center"

>
  <span>{ICONS.backArrow}</span>
  <span>Exit</span>


</Link>
{/* email -editor */}

<div className="my-5">
  <Emaileditor subjectTitle={subjectTitle} />

</div>
      </div>
      
    </div>
  )
}

export default Page;
