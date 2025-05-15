import { Card } from "primereact/card"
import Layout from "./Layout/Layout"
import "./Activity.css"
import { TabPanel, TabView } from "primereact/tabview"
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';     

export default function Activity() {
  const items: MenuItem[] = [{ label: 'Activity' }];
  const home: MenuItem = { icon: 'pi pi-file-export' }

  return (
 
    <div>
        <BreadCrumb style={{position:"absolute",top:102,left:359}} id="Breadcrumb" model={items} home={home} /> 
   <Layout></Layout>
<Card id="Activitycardcontainer">
  <Card id="Activitycard">
<TabView style={{marginTop:-30}}>
  <TabPanel   header={<span style={{ color: 'black'}}>Business Statements</span>} style={{marginTop:-14}}>
   <p style={{textAlign:"left"}}>First Name:</p>
   <p style={{textAlign:"left"}}>No statement(s) found!</p>
   <p style={{marginLeft:-250,marginTop:-77}}>Last Name:</p>
   <p style={{marginLeft:400,marginTop:-40}}>Available Balance:&nbsp;&nbsp; <div className=""></div><b>20$</b></p>

  </TabPanel>
</TabView>

  </Card>
</Card>

    </div>
  )
}
