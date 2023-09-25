import React from 'react';
import '../assets/css/Terms.css';
import Navigation from './Navbar';
import Footer from './Footer';

const Privacy = () => {
  return (
    <><Navigation/>
    <main className="wrap">
      <section className="containert">
        <div className="container__heading">
          <h2>Privacy Policy</h2>
        </div>
        <div className="container__content">
          <p>Effective Date: [23/09/2023]<br/><br/>

Welcome to the CareBee Elder Care Network application, provided by CareBee. We are committed to protecting your privacy. This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your personal information.
By accessing or using the App, you agree to the terms of this Privacy Policy.<br/><br/>
## Information We Collect<br/>
### Personal Information<br/>
- **Name**: We collect your name to personalize your experience and for identification purposes.<br/>
- **Contact Information**: This includes your email address, phone number, and mailing address to communicate with you and provide services.<br/>
- **Health Information**: We may collect health-related information to provide specialized elder care services.<br/>
- **Payment Information**: If you make payments through the App, we may collect payment card details and billing information.<br/>
- **User-generated Content**: Any content you provide, such as reviews or feedback, will be collected.<br/>
- **Location Information**: We may collect your location to provide location-based services with your consent.<br/><br/>
### Automatically Collected Information<br/>
- **Device Information**: We collect information about your device, including its type, operating system, and unique device identifiers.<br/>
- **Usage Information**: We gather data about how you use the App, such as the pages you visit and actions you take.<br/>
- **Log Data**: We collect server logs, which may include your IP address, browser type, and access times.<br/><br/>
## How We Use Your Information<br/>
We use the collected information for the following purposes:<br/>
- **Providing Services**: To offer and improve our elder care services.<br/>
- **Communications**: To contact you regarding updates, promotions, and important information.<br/>
- **Payment Processing**: To process payments and billing-related activities.<br/>
- **Analytics**: To analyze usage patterns and improve the App's functionality.<br/>
- **Legal Compliance**: To comply with legal obligations.<br/><br/>
## Data Sharing and Disclosure<br/>
We may share your information with:<br/>
- **Service Providers**: Third-party service providers who assist us in delivering our services.<br/>
- **Legal Requirements**: When required by law or in response to legal requests.<br/>
- **Business Transfers**: In the event of a merger, acquisition, or sale of all or part of our assets.<br/><br/>
## Your Choices<br/>
- **Access and Update**: You can review and update your personal information through the App.<br/>
- **Communication Preferences**: You can opt out of marketing communications.<br/>
- **Location Services**: You can disable location services through your device settings.<br/><br/>
## Security<br/>
We employ reasonable security measures to protect your information. However, no data transmission over the internet or method of electronic storage is entirely secure.<br/><br/>
## Children's Privacy<br/>
The App is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children.<br/><br/>
## Changes to this Privacy Policy<br/>
We may update this Privacy Policy periodically. Please review it regularly for any changes.<br/><br/>
## Contact Us
If you have questions or concerns about this Privacy Policy, please contact us at [Contact Information].<br/><br/>
[End of Privacy Policy]
<br/></p>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
};

export default Privacy;
