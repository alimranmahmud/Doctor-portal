
import { useLoaderData } from "react-router";
import HistoryData from "./HistoryData";


const History = () => {
const useData = useLoaderData();
console.log(useData)
    return (
        <div className="">
            {
                useData.map(data=><HistoryData key={data._id} data={data}></HistoryData>)
            }
        </div>
    );
};

export default History;