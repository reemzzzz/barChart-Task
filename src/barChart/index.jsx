
import { useEffect, useState } from "react";

const BarChart = () => {
     const arr = [
      {month:"Jan",won:1,lost:2},
      {month:"Feb",won:2,lost:0},
      {month:"March",won:1,lost:5},
      {month:"June",won:3,lost:3},
  ] 
  
  const [position,setPosition] = useState({x: 0,y:0});

  useEffect(()=>{
    const handleMouseMove = (e) =>{
      setPosition({ x:e.clientX,y:e.clientY })
    };

    window.addEventListener('mousemove',handleMouseMove);
    return () => {
      window.removeEventListener('mousemove',handleMouseMove);
    };
  },[]);


  return (
    <div className="h-full w-full" >
      <div className="flex flex-col justify-center items-center gap-10 h-full w-full ">
      <div className="font-bold text-xl p-4">
        Bar Chart
      </div>
      <div className="flex flex-row  gap-6 justify-center items-end shadow-xl p-10 rounded-xl border-2 border-dashed">
        {arr.map(item=>
        {
          return(
            <div className="">
            <div className="flex flex-col rounded-xl overflow-hidden w-8 justify-self-center">
              <div 
                className="group/item bg-green-400 text-center"
                style={{ height: `${item.won * 30}px` }}
              >
                
                <div 
                  className="fixed p-2 bg-gray-100 rounded-lg shadow-sm cursor-none invisible group-hover/item:visible"
                  style={{
                    left: position.x + 2,
                    top:position.y + 2,
                  }}  
                >
                  {item.won}
                </div>

              </div>
                <div 
                  className="group/item bg-red-400 p-2 text-center"
                  style={{ height: `${item.lost * 30}px` }}
                  >
                      <div 
                  className="fixed p-2 bg-gray-100 rounded-lg shadow-sm cursor-none invisible group-hover/item:visible"
                  style={{
                    left: position.x + 2,
                    top:position.y + 2,
                  }}  
                >
                  {item.lost}
                </div>
               </div>
              
            </div>
            
            <div className="font-semibold">
              {item.month}
            </div>
          </div>
          )
        }
        )}
    </div>
    </div>
    </div>
  )
}
export default BarChart;