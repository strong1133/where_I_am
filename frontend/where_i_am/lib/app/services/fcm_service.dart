import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter_fcm/flutter_fcm.dart';

class FcmService {
  static String token = 'token';

  static initFCM() async {
    try {
      await FCM.initializeFCM(
          onTokenChanged: (String? token) {
            FcmService.token = token!;
            print(token);
          },
          onNotificationReceived: (RemoteMessage message) {
            Future<void> fc = message as Future<void>;
            return fc;
          },
          icon: 'icon');
    } catch (e) {}
  }
}
