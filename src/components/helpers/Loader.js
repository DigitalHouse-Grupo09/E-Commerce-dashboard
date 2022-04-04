function Loader ({ align = 'center', className = '' }) {
    return (
        <div className={`d-flex justify-content-${align} ${className}`}>
            <i className="fa-solid fa-cog fa-spin"></i>
        </div>
    )
}

export default Loader;
