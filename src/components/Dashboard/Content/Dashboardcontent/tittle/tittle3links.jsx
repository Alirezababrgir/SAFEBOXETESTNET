const TITTLE3LINKS = ({payment}) => {
    return (
        <>
            <div className="col-6 col-md-6 col-xl-4">
                <div className="card mb-3 widget-content bg-midnight-bloom">
                    <div className="widget-content-wrapper text-white">
                        <div className="widget-content-left">
                            <h4 className="widget-heading">Your Packages</h4>
                            <div className="widget-subheading">Last year expenses</div>
                        </div>
                        <div className="widget-content-right">
                            <div className="widget-numbers text-white ml-4"><span>{payment}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TITTLE3LINKS;