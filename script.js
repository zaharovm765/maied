function addOne(id)
 {
    //START ONESIGNAL CODE
    //Remove this method to stop OneSignal Debugging 
    window.plugins.OneSignal.setLogLevel({logLevel: 6, visualLevel: 0});
    
    var notificationOpenedCallback = function(jsonData) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };
    // Set your iOS Settings
    var iosSettings = {};
    iosSettings["kOSSettingsKeyAutoPrompt"] = false;
    iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;
    
    window.plugins.OneSignal
      .startInit(id)
      .handleNotificationOpened(notificationOpenedCallback)
      .iOSSettings(iosSettings)
      .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification)
      .endInit();
    
    // The promptForPushNotificationsWithUserResponse function will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 6)
    window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
      console.log("User accepted notifications: " + accepted);
    });
    //END ONESIGNAL CODE
  }


async function FB(Deep){
    console.log("DDOK"+Deep);

    if(window.localStorage.getItem("deep")==null && Deep=="" && window.localStorage.getItem("deep")==null){
        window.location.href ="game.html";
        
    }else{
        if(Deep!=""){
            window.localStorage.setItem("deep", Deep);
            var Link = Deep.replace("app://","");
        }
        else{
            var Link = window.localStorage.getItem("deep").replace("app://","");
        }
        console.log("DEEP"+Deep);
        window.location.href = "https://mytraffictracker.com/click.php?"+Link;
 
    }
  }
  var app = {
      // Application Constructor
      initialize: function() {
          document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
      },
  
      // deviceready Event Handler
      //
      // Bind any cordova events here. Common events are:
      // 'pause', 'resume', etc.
  
  
      onDeviceReady: function() {
          this.receivedEvent('deviceready');
          addOne("a271da1a-0e8b-4b26-8f6d-8c499c191663");
          facebookConnectPlugin.getDeferredApplink(
              function(result){ 
                  FB(result);},
              function(error) {
                  console.log("DDERR"+JSON.stringify(error));
              }
          );
  
      },
  
      // Update DOM on a Received Event
      receivedEvent: function(id) {
          var parentElement = document.getElementById(id);
          var listeningElement = parentElement.querySelector('.listening');
          var receivedElement = parentElement.querySelector('.received');
  
          listeningElement.setAttribute('style', 'display:none;');
          receivedElement.setAttribute('style', 'display:block;');
  
          console.log('Received Event: ' + id);
      }
  };
  
  app.initialize();
