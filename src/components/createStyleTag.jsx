const CreateStyleTag = ({nameId, contentCss})=>{
    return(
        <style id={nameId}>{contentCss}</style>
    );
};
export default CreateStyleTag