(function() {
  require("spinal-env-drive-core");

  var SpinalDrive_App_FileExplorer_svf_viewer = require("./OpenSvf/SpinalDrive_App_svf_viewer_angular.js")
    .FileExplorerSvfViewer;
  window.spinalDrive_Env.add_applications(
    "FileExplorer",
    new SpinalDrive_App_FileExplorer_svf_viewer()
  );
})();
