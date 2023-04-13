import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { DataUtil } from '@syncfusion/ej2-data';
import { Browser, extend } from '@syncfusion/ej2-base';

const  orderData=[]

export function ShipTable() {
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
    return (<div className='control-pane px-[100px] z-10'>
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
