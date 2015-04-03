requirejs.config({
    baseUrl: "/github/exemplo-buildAMD/",
    paths: {
        "libDeTerceiros": "js/lib/libDeTerceiros"
    },
    shim: {
        "libDeTerceiros": {
            exports: "libDeTerceiros"
        }
    }
});
