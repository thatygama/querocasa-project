import { useEffect } from "react";

const DashboardUserMainPage: React.FunctionComponent = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
    useEffect(() => {
      scrollToTop();
    }, []);
    return (
      <div className="main_dashboard main_page_dashboard">
        <h2 style={{ color: 'rgb(110, 72, 0)'}}>Dashboard do Usuário!</h2>
      </div>
    );
  }
  
  export default DashboardUserMainPage;
  