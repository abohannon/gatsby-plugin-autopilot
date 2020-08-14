import React from 'react'

export const onRenderBody = (
  { pathname, setHeadComponents },
  pluginOptions,
) => {
  const { trackingId, exclude, app } = pluginOptions

  if (!trackingId) {
    return null
  }

  if (exclude && exclude.includes(pathname)) return null

  const isApp = !!app

  setHeadComponents([
    <link
      rel="preconnect"
      key="preconnect-autopilot"
      href="https://speedyrhino.co"
    />,
    <link
      rel="dns-prefetch"
      key="dns-prefetch-autopilot"
      href="https://speedyrhino.co"
    />,
  ])

  return setHeadComponents([
    <script
      key="gatsby-plugin-autopilot"
      dangerouslySetInnerHTML={{
        __html: `
          (function(o){var b="https://speedyrhino.co/anywhere/",t="${trackingId}",a=window.AutopilotAnywhere={_runQueue:[],run:function(){this._runQueue.push(arguments);}},c=encodeURIComponent,s="SCRIPT",d=document,l=d.getElementsByTagName(s)[0],p="t="+c(d.title||"")+"&u="+c(d.location.href||"")+"&r="+c(d.referrer||""),j="text/javascript",z,y;if(!window.Autopilot) window.Autopilot=a;if(o.app) p="devmode=true&"+p;z=function(src,asy){var e=d.createElement(s);e.src=src;e.type=j;e.async=asy;l.parentNode.insertBefore(e,l);};y=function(){z(b+t+'?'+p,true);};if(window.attachEvent){window.attachEvent("onload",y);}else{window.addEventListener("load",y,false);}})({"app":${isApp}});
        `,
      }}
    />,
  ])
}
