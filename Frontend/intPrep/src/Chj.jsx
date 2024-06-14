import { memo } from "react"
function MemChecker(){
  console.log("this is the memo checker")
  return(
  <>

  </>
  )
}

export default memo(MemChecker , [])