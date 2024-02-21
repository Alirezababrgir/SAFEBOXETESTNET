import * as React from 'react';
import { DrawerHeader } from "../../Sidebar/Drawerheader";
import TITTLE from './tittle/tittle';
import TITTLE3LINKS from './tittle/tittle3links';
import FOOTERE3LINKS from './footer/footer3link';
import Charts from './footer/charts';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { lazy } from 'react';
import Footer from '../Footer';
/********Lazy Import Boxes********/
const BOX_40 = lazy(() => import('./Boxes/40%box'))
const BOX_30 = lazy(() => import('./Boxes/30%box'))
const BOX_10 = lazy(() => import('./Boxes/10%box'))
const BOX_10_SHN = lazy(() => import('./Boxes/shn10%box'))
/*
    //redirect to connect wallet

    import { useEffect } from 'react';
import { useMetamask } from '../../../ConnectWallet/Usemetamask';
import { useNavigate } from 'react-router-dom';

    const { isConnected } = useMetamask();
    const navigate = useNavigate()

    useEffect(() => {
        if (!isConnected) {
            navigate("/Connectwallet")
        }
    }, [isConnected])
*/
const Homecontent = () => {

    return (
        <>
            <HelmetProvider>
                <Helmet><title>HOME | DASHBOARD</title></Helmet>
                <DrawerHeader />
                <div className="app-main">
                    <div className="container">
                        <div className="app-main__outer">
                            <div className="app-main__inner">
                                <TITTLE />
                                <div className="row mb-4" id='dashboard'>
                                    <TITTLE3LINKS />
                                </div>
                                <div className="row mt-4 m-auto">
                                    <React.Suspense><BOX_40 /></React.Suspense>
                                    <React.Suspense><BOX_30 /></React.Suspense>
                                </div>
                                <div className="row m-auto">
                                    <React.Suspense><BOX_10 /></React.Suspense>
                                    <React.Suspense><BOX_10_SHN /></React.Suspense>
                                </div>
                                <div className="row">
                                    <Charts />
                                    <Charts />
                                </div>
                                <div className="row">
                                    <FOOTERE3LINKS />
                                </div>
                            </div>
                            <div className="app-wrapper-footer">
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            </HelmetProvider>
        </>
    )
}
export default Homecontent;









/*responsive footer links

 <div className="app-footer">
                        <div className="app-footer__inner">
                                <div className="app-footer-left">
                                    <ul className="nav">
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                Footer Link 1
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                Footer Link 2
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="app-footer-right">
                                    <ul className="nav">
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                Footer Link 3
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                <div className="badge badge-success mr-1 ml-0">
                                                    <small>NEW</small>
                                                </div>
                                                Footer Link 4
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>*/



/*nice card bootstrap


         <div className="mb-3 card">
                                    <div className="card-header-tab card-header">
                                        <div className="card-header-title">
                                            <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
                                           <h1 className="fs-4">Senior Box</h1> 
                                        </div>
                                        <div className="btn-actions-pane-right">
                                            <div className="nav">
                                                <a href="javascript:void(0);" className="border-0 btn-pill btn-wide btn-transition active btn btn-outline-alternate">Tab 1</a>
                                                <a href="javascript:void(0);" className="ml-1 btn-pill btn-wide border-0 btn-transition  btn btn-outline-alternate second-tab-toggle-alt">Tab 2</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-content">
                                        <div className="tab-pane fade active show" id="tab-eg-55">
                                            <div className="widget-chart p-3">
                                                <div style={{ height: '350px' }}>
                                                    <PieChart
                                                        series={[
                                                            {
                                                                data,
                                                                innerRadius: 10,
                                                                outerRadius: 100,
                                                                paddingAngle: 1,
                                                                cornerRadius: 5,
                                                                startAngle: -90,
                                                                endAngle: 180,
                                                                color: "red"

                                                            }
                                                        ]}

                                                    />
                                                </div>
                                                <div className="widget-chart-content text-center mt-5">
                                                    <div className="widget-description mt-0 text-warning">
                                                        <i className="fa fa-arrow-left" />
                                                        <span className="pl-1">175.5%</span>
                                                        <span className="text-muted opacity-8 pl-1">increased server resources</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pt-2 card-body">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left">
                                                                        <div className="widget-numbers fsize-3 text-muted">63%</div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">Generated Leads</div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <div className="progress-bar-sm progress-bar-animated-alt progress">
                                                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={63} aria-valuemin={0} aria-valuemax={100} style={{ width: '63%' }} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left">
                                                                        <div className="widget-numbers fsize-3 text-muted">32%</div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">Submitted Tickers</div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <div className="progress-bar-sm progress-bar-animated-alt progress">
                                                                        <div className="progress-bar bg-success" role="progressbar" aria-valuenow={32} aria-valuemin={0} aria-valuemax={100} style={{ width: '32%' }} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left">
                                                                        <div className="widget-numbers fsize-3 text-muted">71%</div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">Server Allocation</div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <div className="progress-bar-sm progress-bar-animated-alt progress">
                                                                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{ width: '71%' }} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="widget-content">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left">
                                                                        <div className="widget-numbers fsize-3 text-muted">41%</div>
                                                                    </div>
                                                                    <div className="widget-content-right">
                                                                        <div className="text-muted opacity-6">Generated Leads</div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-progress-wrapper mt-1">
                                                                    <div className="progress-bar-sm progress-bar-animated-alt progress">
                                                                        <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={41} aria-valuemin={0} aria-valuemax={100} style={{ width: '41%' }} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                */







/*nice list bootstrap

   <div className="col-md-12">
                                <div className="main-card mb-3 card">
                                    <div className="card-header">Active Users
                                        <div className="btn-actions-pane-right">
                                            <div role="group" className="btn-group-sm btn-group">
                                                <button className="active btn btn-focus">Last Week</button>
                                                <button className="btn btn-focus">All Month</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th className="text-center">#</th>
                                                    <th>Name</th>
                                                    <th className="text-center">City</th>
                                                    <th className="text-center">Status</th>
                                                    <th className="text-center">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-center text-muted">#345</td>
                                                    <td>
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left mr-3">
                                                                    <div className="widget-content-left">
                                                                        <img width={40} className="rounded-circle" src="assets/images/avatars/4.jpg" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="widget-content-left flex2">
                                                                    <div className="widget-heading">John Doe</div>
                                                                    <div className="widget-subheading opacity-7">Web Developer</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">Madrid</td>
                                                    <td className="text-center">
                                                        <div className="badge badge-warning">Pending</div>
                                                    </td>
                                                    <td className="text-center">
                                                        <button type="button" id="PopoverCustomT-1" className="btn btn-primary btn-sm">Details</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center text-muted">#347</td>
                                                    <td>
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left mr-3">
                                                                    <div className="widget-content-left">
                                                                        <img width={40} className="rounded-circle" src="assets/images/avatars/3.jpg" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="widget-content-left flex2">
                                                                    <div className="widget-heading">Ruben Tillman</div>
                                                                    <div className="widget-subheading opacity-7">Etiam sit amet orci eget</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">Berlin</td>
                                                    <td className="text-center">
                                                        <div className="badge badge-success">Completed</div>
                                                    </td>
                                                    <td className="text-center">
                                                        <button type="button" id="PopoverCustomT-2" className="btn btn-primary btn-sm">Details</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center text-muted">#321</td>
                                                    <td>
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left mr-3">
                                                                    <div className="widget-content-left">
                                                                        <img width={40} className="rounded-circle" src="assets/images/avatars/2.jpg" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="widget-content-left flex2">
                                                                    <div className="widget-heading">Elliot Huber</div>
                                                                    <div className="widget-subheading opacity-7">Lorem ipsum dolor sic</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">London</td>
                                                    <td className="text-center">
                                                        <div className="badge badge-danger">In Progress</div>
                                                    </td>
                                                    <td className="text-center">
                                                        <button type="button" id="PopoverCustomT-3" className="btn btn-primary btn-sm">Details</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center text-muted">#55</td>
                                                    <td>
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left mr-3">
                                                                    <div className="widget-content-left">
                                                                        <img width={40} className="rounded-circle" src="assets/images/avatars/1.jpg" alt="" /></div>
                                                                </div>
                                                                <div className="widget-content-left flex2">
                                                                    <div className="widget-heading">Vinnie Wagstaff</div>
                                                                    <div className="widget-subheading opacity-7">UI Designer</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">Amsterdam</td>
                                                    <td className="text-center">
                                                        <div className="badge badge-info">On Hold</div>
                                                    </td>
                                                    <td className="text-center">
                                                        <button type="button" id="PopoverCustomT-4" className="btn btn-primary btn-sm">Details</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="d-block text-center card-footer">
                                        <button className="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i className="pe-7s-trash btn-icon-wrapper"> </i></button>
                                        <button className="btn-wide btn btn-success">Save</button>
                                    </div>
                                </div>
                            </div>*/





/*nice 3 card process 


  <div className="col-md-6 col-lg-3">
                                <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                                    <div className="widget-content">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left pr-2 fsize-1">
                                                    <div className="widget-numbers mt-0 fsize-3 text-danger">71%</div>
                                                </div>
                                                <div className="widget-content-right w-100">
                                                    <div className="progress-bar-xs progress">
                                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{ width: '71%' }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left fsize-1">
                                                <div className="text-muted opacity-6">Income Target</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="card-shadow-success mb-3 widget-chart widget-chart2 text-left card">
                                    <div className="widget-content">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left pr-2 fsize-1">
                                                    <div className="widget-numbers mt-0 fsize-3 text-success">54%</div>
                                                </div>
                                                <div className="widget-content-right w-100">
                                                    <div className="progress-bar-xs progress">
                                                        <div className="progress-bar bg-success" role="progressbar" aria-valuenow={54} aria-valuemin={0} aria-valuemax={100} style={{ width: '54%' }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left fsize-1">
                                                <div className="text-muted opacity-6">Expenses Target</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="card-shadow-warning mb-3 widget-chart widget-chart2 text-left card">
                                    <div className="widget-content">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left pr-2 fsize-1">
                                                    <div className="widget-numbers mt-0 fsize-3 text-warning">32%</div>
                                                </div>
                                                <div className="widget-content-right w-100">
                                                    <div className="progress-bar-xs progress">
                                                        <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={32} aria-valuemin={0} aria-valuemax={100} style={{ width: '32%' }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left fsize-1">
                                                <div className="text-muted opacity-6">Spendings Target</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="card-shadow-info mb-3 widget-chart widget-chart2 text-left card">
                                    <div className="widget-content">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left pr-2 fsize-1">
                                                    <div className="widget-numbers mt-0 fsize-3 text-info">89%</div>
                                                </div>
                                                <div className="widget-content-right w-100">
                                                    <div className="progress-bar-xs progress">
                                                        <div className="progress-bar bg-info" role="progressbar" aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} style={{ width: '89%' }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left fsize-1">
                                                <div className="text-muted opacity-6">Totals Target</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>*/