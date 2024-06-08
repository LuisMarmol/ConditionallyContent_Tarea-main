
export function AlertComponent ({children, ...prop}) {
    return(
        <div id="alert">
            <h2>{children}</h2>
            <p>These changes can't be reverted!</p>
            <button onClick={prop.onClick}>Proceed</button>
        </div>
    );
}
