export const Wrap = ({children, ...rest}) =>  {

    return (
        <div style={{background: "#f0f5f5"}}>
            <h3>A simple wrap with a child component </h3> 
            <div>
        ---------------------------------------------------------------
            {children}
        ---------------------------------------------------------------
            </div>
        </div>
    )
}