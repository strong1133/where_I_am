import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter_fcm/flutter_fcm.dart';
import 'package:get/get.dart';
import 'package:where_i_am/app/services/http_service.dart';

class FcmService extends GetxService {
  static String token = 'token';

  @override
  void onInit() {
    initFCM();
    // TODO: implement onInit
    super.onInit();
  }

  static Future<void> onNotificationReceived(RemoteMessage message) async {
    await Firebase.initializeApp();
    print("MSG RECE");
    print('Handling a message ${message.data}');
    print('Handling a message ${message.notification}');
    print('Handling a message ${message.mutableContent}');
  }

  static initFCM() async {
    try {
      await FCM.initializeFCM(
          onTokenChanged: (String? token) {
            FcmService.token = token!;
            print(token);

            var body = {"deviceToken": token, "userId": "tjrwls455"};

            // 테스트 용 임시 임포트
            HttpService httpService = Get.put(HttpService());
            httpService.postSender(uri: '/msg/push', body: body);
          },
          onNotificationReceived: onNotificationReceived,
          onNotificationPressed: (Map<String, dynamic> data) {
            print(data);
          },
          icon: 'ic_launcher');
    } catch (e) {}
  }
}
