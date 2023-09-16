export const Wrap = ({children, ...rest}) =>  {

    return (
        <div style={{background: "#f0f5f5"}}>
            A simple wrap with a child component
            <p>
            ----------------------
            {children}
            -----------------------
            </p>
        </div>
    )
}