# Hello Performance Testing

This repo explores some scenarios using [Artillery.IO](https://artillery.io/).

## Run quick test against WebApi

1. Run the application:
```sh
$ dotnet run ./src/Example.Api/Example.Api.csproj
```
2. Run the quick test
```sh
$ cd tests/load
$ npm i
$ npx artillery quick --count 20 --num 50 --insecure https://localhost:5001/WeatherForecast --output result.json
```
You can generate a HTML report from JSON result:
```sh
$ npx artillery report --output result.html result.json
$ open result.html
```

## Run a test scenario against a MVC Web App

1. Run the application
```sh
$ dotnet run src/Example.Web/Example.Web.csproj
```
2. Remenber to fix the web application port in `example-test.yaml`.
3. Run the test
```sh
$ cd tests/load
$ npm i
$ npx artillery run example-test.yaml -o results.json --insecure
```
You can also generate a HTML report from JSON result. Refer the command in the first example.

## References

[Artillery Docs](https://artillery.io/docs/guides/overview/welcome.html)