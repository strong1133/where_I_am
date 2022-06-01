import 'dart:convert';

import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'package:where_i_am/app/config/wiam_envs.dart';

class HttpService extends GetxService {
  // http Post 요청
  postSender({required String uri, required Map body}) async {
    uri = WiamEnvs.API_URL + uri;
    http.Response response = await http.post(Uri.parse(uri),
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json',
        },
        body: jsonEncode(body));

    var resString = response.body;
    var resJson = jsonDecode(resString);

    return resJson;
  }
}
