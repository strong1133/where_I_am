import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:where_i_am/app/services/fcm_service.dart';

class Root extends StatelessWidget {
  Root();

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      initialBinding: BindingsBuilder(() => {Get.put(FcmService())}),
      home: Scaffold(
        appBar: AppBar(),
        body: Center(
            child: Column(
          children: [
            Text('ROOT'),
            SizedBox(
              height: 50,
            ),
            ElevatedButton(onPressed: () {}, child: Text('BTN'))
          ],
        )),
      ),
    );
  }
}
