Ext.regApplication({
  name: 'app',
  launch: function() {
    this.views.viewport = new this.views.Viewport();
  }
});
/* name: 'app' will create the following namespaces:
 * app.views,
 * app.models,
 * app.controllers,
 * app.stores
 */
Ext.regApplication({
  name: 'app',
  launch: function() {
    console.log("App Launched");
    /*
     * Uncomment the below line once you've written viewport.js
     * as tasked in Step 2
     */
    //this.views.viewport = new this.views.Viewport();
  }
});