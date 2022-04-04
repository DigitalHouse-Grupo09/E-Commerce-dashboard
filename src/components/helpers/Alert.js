function Alert ({ text = '', type = 'danger' }) {
    return (
        <div className={`card mb-4 py-3 border-bottom-${type}`}>
            <div className="card-body">
                {text}
            </div>
        </div>
    )
}

export default Alert;
