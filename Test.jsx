const { Button, DatePicker, ConfigProvider } = antd;
const { List } = antdm;// 修改本地antd-mobile.min.js里的名称
const DayPicker = antdm.DatePicker;
const { RangePicker } = DatePicker;
const now = new Date();
moment.locale('zh-cn');

// var locale =  {
//     lang: {
//       placeholder: '请选择日期',
//       yearPlaceholder: '请选择年份',
//       quarterPlaceholder: '请选择季度',
//       monthPlaceholder: '请选择月份',
//       weekPlaceholder: '请选择周',
//       rangePlaceholder: ['开始日期', '结束日期'],
//       rangeYearPlaceholder: ['开始年份', '结束年份'],
//       rangeMonthPlaceholder: ['开始月份', '结束月份'],
//       rangeWeekPlaceholder: ['开始周', '结束周'],
//     },
//     timePickerLocale: {
//       "placeholder": "选择时间"
//     },
//     "dateFormat": "YYYY-MM-DD",
//     "dateTimeFormat": "YYYY-MM-DD HH:mm:ss",
//     "weekFormat": "YYYY-wo",
//     "monthFormat": "YYYY-MM"
// }

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: now
        };
    }
    render() {
        return (
            <div>
                {/* <ConfigProvider locale={zh_CN}> */}
                    <br />
                    <Button type="primary">Primary Button</Button>{'\u00A0'}{'\u00A0'}
                    <Button>Default Button</Button>{'\u00A0'}{'\u00A0'}
                    <Button type="dashed">Dashed Button</Button>{'\u00A0'}{'\u00A0'}
                    <Button type="text">Text Button</Button>{'\u00A0'}{'\u00A0'}
                    <Button type="link">Link Button</Button>
                    <br />
                    <br />
                    <DatePicker/>
                    <RangePicker/>
                {/* </ConfigProvider> */}
                <br/>
                <br/>
                <List>
                    <DayPicker mode="date" title="请选择日期" value={this.state.date} onChange={date => this.setState({ date })} >
                        <List.Item arrow="horizontal">开始日期</List.Item>
                    </DayPicker>
                </List>
            </div>
        );
    }
}

ReactDOM.render(<Test/>, document.getElementById('root'));