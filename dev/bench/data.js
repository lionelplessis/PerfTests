window.BENCHMARK_DATA = {
  "lastUpdate": 1606376088628,
  "repoUrl": "https://github.com/lionelplessis/PerfTests",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "8976496+lionelplessis@users.noreply.github.com",
            "name": "Lionel Plessis",
            "username": "lionelplessis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d28f4ddaa42fb7150b54de53d4a444674c0eb6eb",
          "message": "Update RunPerfTests.yml",
          "timestamp": "2020-11-25T23:54:28+01:00",
          "tree_id": "e37079333319cd959c24336fdc4f02178cc04712",
          "url": "https://github.com/lionelplessis/PerfTests/commit/d28f4ddaa42fb7150b54de53d4a444674c0eb6eb"
        },
        "date": 1606347194595,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "PerfTests.Md5VsSha256.Sha256(N: 1000)",
            "value": 3494.886784689767,
            "unit": "ns",
            "range": "± 81.79344216858351"
          },
          {
            "name": "PerfTests.Md5VsSha256.Md5(N: 1000)",
            "value": 2265.1086144623932,
            "unit": "ns",
            "range": "± 56.92640747550341"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lionelplessis@users.noreply.github.com",
            "name": "Lionel Plessis",
            "username": "lionelplessis"
          },
          "committer": {
            "email": "lionelplessis@users.noreply.github.com",
            "name": "Lionel Plessis",
            "username": "lionelplessis"
          },
          "distinct": true,
          "id": "7fcc952a8cb9a24d82458d70fc2ae6c1c36c4aa0",
          "message": "Artificially slow down impl to test github action",
          "timestamp": "2020-11-26T08:33:06+01:00",
          "tree_id": "849f47dc28bc877f247f13da30af0c725bb3018f",
          "url": "https://github.com/lionelplessis/PerfTests/commit/7fcc952a8cb9a24d82458d70fc2ae6c1c36c4aa0"
        },
        "date": 1606376082619,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "PerfTests.Md5VsSha256.Sha256(N: 1000)",
            "value": 1087957.5835658482,
            "unit": "ns",
            "range": "± 1548.1597402999341"
          },
          {
            "name": "PerfTests.Md5VsSha256.Md5(N: 1000)",
            "value": 2346.33633177621,
            "unit": "ns",
            "range": "± 17.9325776444327"
          }
        ]
      }
    ]
  }
}