(async function () {
    "use strict";
    const { getConfiguration } = window.csLib
    const PluginApi = window.PluginApi;
    const React = PluginApi.React;
    const { Button } = PluginApi.libraries.Bootstrap;
    const { NavLink } = PluginApi.libraries.ReactRouterDOM;
    const { faHeadphones } = PluginApi.libraries.FontAwesomeSolid;
    const { Icon } = PluginApi.components;

    const defaultConfig = { audioTabURL: "/scenes?c=(%22type%22:%22video_codec%22,%22modifier%22:%22IS_NULL%22)" }
    const config = await getConfiguration("audioTab", defaultConfig)
    const pluginConfig = {
        ...defaultConfig,
        ...config,
    }

    PluginApi.patch.before("MainNavBar.MenuItems", function (props) {
        return [
            {
                children: (React.createElement(React.Fragment, null,
                    props.children,
                    React.createElement(NavLink, { className: "nav-utility", exact: true, to: pluginConfig["audioTabURL"] },
                        React.createElement(Button, { className: "minimal p-4 p-xl-2 d-flex d-xl-inline-block flex-column justify-content-between align-items-center" },
                            React.createElement(Icon, { icon: faHeadphones, className: "nav-menu-icon d-block d-xl-inline mb-2 mb-xl-0" }),
                            React.createElement("span", null, "Audio")))))
            }
        ];
    });
})();
