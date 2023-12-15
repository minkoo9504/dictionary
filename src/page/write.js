import DicWrite from "../components/dicwrite";

const Write = ({onCreate,onChange,word,category,content}) => {
    return ( 
        <div className="write">
            <h1>Write</h1>
            <DicWrite onCreate={onCreate} onChange={onChange} word={word} category={category} content={content} />
        </div>
     );
}
 
export default Write;