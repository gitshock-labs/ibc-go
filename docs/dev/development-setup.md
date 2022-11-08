# Development setup

## Forking

Please note that Go requires code to live under absolute paths, which complicates forking. While my fork lives at `https://github.com/colin-axner/ibc-go`, the code should never exist at `$GOPATH/src/github.com/colin-axner/ibc-go`. Instead, we use `git remote` to add the fork as a new remote for the original repo `$GOPATH/src/github.com/cosmos/ibc-go`), and do all the work there.

For instance, to create a fork and work on a branch of it, I would:

- Create the fork on GitHub, using the fork button.
- Go to the original repo checked out locally (i.e. `$GOPATH/src/github.com/cosmos/ibc-go`)
- `git remote add fork git@github.com:colin-axner/ibc-go.git`

Now `fork` refers to my fork and `origin` refers to the ibc-go version. So I can `git push -u fork main` to update my fork, and make pull requests to ibc-go from there. Of course, replace `colin-axner` with your git handle.

To pull in updates from the origin repo, run

- `git fetch origin`
- `git rebase origin/main` (or whatever branch you want)

## Dependencies

We use [Go 1.14 Modules](https://github.com/golang/go/wiki/Modules) to manage dependency versions.

The main branch of every Cosmos repository should just build with `go get`, which means they should be kept up-to-date with their dependencies, so we can get away with telling  people they can just `go get` our software.

Since some dependencies are not under our control, a third party may break our build, in which case we can fall back on `go mod tidy -v`.

## Protobuf

We use [Protocol Buffers](https://developers.google.com/protocol-buffers) along with [gogoproto](https://github.com/gogo/protobuf) to generate code for use in ibc-go.

For determinstic behavior around protobuf tooling, everything is containerized using Docker. Make sure to have Docker installed on your machine, or head to [Docker's website](https://docs.docker.com/get-docker/) to install it.

For formatting code in `.proto` files, you can run the `make proto-format` command.

For linting and checking breaking changes, we use [buf](https://buf.build/). You can use the commands `make proto-lint` and `make proto-check-breaking` to respectively lint your proto files and check for breaking changes.

To generate the protobuf stubs, you can run `make proto-gen`.

We also added the `make proto-all` command to run all the above commands sequentially.

For generating or updating the swagger file that documents the URLs of the RESTful API that exposes the gRPC endpoints over HTTP, you can run the `proto-swagger-gen` command.

It reads protobuf service definitions and generates a reverse-proxy server which translates a RESTful HTTP API into gRPC. 

In order for imports to properly compile in your IDE, you may need to manually set your protobuf path in your IDE's workspace settings/config.

For example, in vscode your `.vscode/settings.json` should look like:

```
{
    "protoc": {
        "options": [
        "--proto_path=${workspaceRoot}/proto",
        "--proto_path=${workspaceRoot}/third_party/proto"
        ]
    }
}
```

## Developing and testing

- The latest state of development is on `main`.
- Build the `simd` test chain binary with `make build`.
- `main` must never fail `make test`.
- No `--force` onto `main` (except when reverting a broken commit, which should seldom happen).
- Create a development branch either on `github.com/cosmos/ibc-go`, or your fork (using `git remote add fork`).
- Before submitting a pull request, begin `git rebase` on top of `main`.

If you open a PR on ibc-go, it is mandatory to update the relevant documentation in `/docs`.

Please make sure to run `make format` before every commit - the easiest way to do this is have your editor run it for you upon saving a file. Additionally please ensure that your code is lint compliant by running `make lint-fix` (requires `golangci-lint`).

All Go tests in ibc-go can be ran by running `make test`.

When testing a function under a variety of different inputs, we prefer to use [table driven tests](https://github.com/golang/go/wiki/TableDrivenTests).

All tests should use the testing package. Please see the testing package [README](./testing/README.md) for more information.

Test coverage is continuously deployed at https://app.codecov.io/github/cosmos/ibc-go. PRs that improve test coverage are welcome, but in general the test coverage should be used as a guidance for finding API use cases that are not covered by tests. We don't recommend adding tests that only improve coverage but not actually test a meaning use case.

## Documentation

- Generate the folder `docs/.vuepress/dist` with all the static files for the documentation site with `make build-docs`.
- Run the documentation site locally with `make view-docs`.