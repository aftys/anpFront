import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { DataUtil } from '@syncfusion/ej2-data';
import { Browser, extend } from '@syncfusion/ej2-base';

const  orderData=[]

export function ResponsibleTable() {
    const toolbarOptions = ['Add', 'Edit', 'Delete'];
    const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog'};
    const validationRules = { required: true };
    const orderidRules = { required: true, number: true };
    const pageSettings = { pageCount: 5 };

    function actionComplete(args) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            if (Browser.isDevice) {
                args.dialog.height = window.innerHeight - 90 + 'px';
                args.dialog.dataBind();
            }
        }
    }
    return (<div className='control-pane px-[px] z-10'>
            <div className='control-section'>
                <GridComponent dataSource={orderData} toolbar={toolbarOptions} allowPaging={true} editSettings={editSettings} pageSettings={pageSettings} actionComplete={actionComplete.bind(this)}>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' validationRules={orderidRules} isPrimaryKey={true}></ColumnDirective>
                        <ColumnDirective field='CustomerName' headerText='Customer Name' width='150' validationRules={validationRules}></ColumnDirective>
                        <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'></ColumnDirective>
                        <ColumnDirective field='OrderDate' headerText='Order Date' format='yMd' width='170'></ColumnDirective>
                        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
                    </ColumnsDirective>
                    <Inject services={[Page, Toolbar, Edit]}/>
                </GridComponent>

            </div>
        </div>);
}


// function DialogFormTemplate(props) {
//     React.useEffect(() => {
//         let states = val;
//         // Set initail Focus
//         states.isAdd ? orderID.focus() : customerName.focus();
//     }, []);
//     const shipCityDistinctData = DataUtil.distinct(orderData, 'ShipCity', true);
//     const shipCountryDistinctData = DataUtil.distinct(orderData, 'ShipCountry', true);
//     let orderID;
//     let customerName;
//     const [val, setval] = React.useState(extend({}, {}, props, true));
//     function onChange(args) {
//         let key = args.target.name;
//         let value = args.target.value;
//         setval(prevVal => ({ ...prevVal, [key]: value }));
//     }
//     let data = val;
//     return (<div>
//         <div className="form-row">
//             <div className="form-group col-md-6">
//                 <div className="e-float-input e-control-wrapper">
//                     <input ref={input => orderID = input} id="OrderID" name="OrderID" type="text" disabled={!data.isAdd} value={data.OrderID} onChange={onChange.bind(this)}/>
//                     <span className="e-float-line"></span>
//                     <label className="e-float-text e-label-top"> Order ID</label>
//                 </div>
//             </div>
//             <div className="form-group col-md-6">
//                 <div className="e-float-input e-control-wrapper">
//                     <input ref={input => customerName = input} value={data.CustomerName} id="CustomerName" name="CustomerName" type="text" onChange={onChange.bind(this)}/>
//                     <span className="e-float-line"></span>
//                     <label className="e-float-text e-label-top">Customer Name</label>
//                 </div>
//             </div>
//         </div>
//         <div className="form-row">
//             <div className="form-group col-md-6">
//                 <NumericTextBoxComponent id="Freight" format='C2' value={data.Freight} placeholder="Freight" floatLabelType='Always'></NumericTextBoxComponent>
//             </div>
//             <div className="form-group col-md-6">
//                 <DatePickerComponent id="OrderDate" value={data.OrderDate} placeholder="Order Date" floatLabelType='Always'></DatePickerComponent>
//             </div>
//         </div>
//         <div className="form-row">
//             <div className="form-group col-md-6">
//                 <DropDownListComponent id="ShipCountry" value={data.ShipCountry} dataSource={shipCountryDistinctData} fields={{ text: 'ShipCountry', value: 'ShipCountry' }} placeholder="Ship Country" popupHeight='300px' floatLabelType='Always'></DropDownListComponent>
//             </div>
//             <div className="form-group col-md-6">
//                 <DropDownListComponent id="ShipCity" value={data.ShipCity} dataSource={shipCityDistinctData} fields={{ text: 'ShipCity', value: 'ShipCity' }} placeholder="Ship City" popupHeight='300px' floatLabelType='Always'></DropDownListComponent>
//             </div>
//         </div>
//         <div className="form-row">
//             <div className="form-group col-md-12">
//                 <div className="e-float-input e-control-wrapper">
//                     <textarea id="ShipAddress" name="ShipAddress" value={data.ShipAddress} onChange={onChange.bind(this)}></textarea>
//                     <span className="e-float-line"></span>
//                     <label className="e-float-text e-label-top">Ship Address</label>
//                 </div>
//             </div>
//         </div>
//     </div>);
//}