import certificateImg from "./sslCert.png";
import vpsServer from "./vpsServer.png";
import dnsImg from "./dns.jpg";
import webHost from "./webSharing.webp";

export default function Products() {
  return (
    <div className="productsAndDescription">
      <fieldset className="sslDescription">
        <img src={certificateImg} width="60px" alt="ssl certificate" />
        <hr />
        <p>
          SSL Certification- “Secure Socket Layer”,this kind of certification
          adds encryption to the client’s website, protecting not only their
          personal information but also that of the site’s visitors.
        </p>
      </fieldset>
      <fieldset className="vpsDescription">
        <img
          src={vpsServer}
          width="90px"
          alt="vps server"
          style={{ marginTop: "25px" }}
        />
        <hr />
        <p>
          VPS Hosting Services – For some, VPS hosting (also known as virtual
          private servers) is a Web hosting solution that can be the best of
          both worlds – a middle ground between shared and dedicated Web
          hosting.
        </p>
      </fieldset>
      <fieldset className="dnsDescription">
        <img src={dnsImg} width="90px" alt="dns example" />
        <hr />
        <p>
          Domain names– whether you’re planning to create one or multiple domain
          names under the same account, we are here to get you started. This
          makes it easy to manage everything related to your website.
        </p>
      </fieldset>
      <fieldset className="webSharingDescription">
        <img src={webHost} width="80px" alt="web sharing illustration" />
        <hr />
        <p>
          Shared website hosting- multiple websites are “live” on the same
          server and split the cost charged by the Webhost Kenya. We guarantee
          uptime and the space and bandwidth you need at a reasonable cost.
        </p>
      </fieldset>
    </div>
  );
}
