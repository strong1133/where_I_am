import 'package:flutter/material.dart';

class Root extends StatelessWidget {
  Root();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
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
