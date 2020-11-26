using System;
using System.Security.Cryptography;
using System.Threading;
using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Running;

namespace PerfTests
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                var summary = BenchmarkRunner.Run<Md5VsSha256>();
            }
            catch (Exception e)
            {
                Console.Error.WriteLine(e);
            }
        }
    }

    [JsonExporterAttribute.Full]
    [JsonExporterAttribute.FullCompressed]
    public class Md5VsSha256
    {
        private SHA256 sha256 = SHA256.Create();
        private MD5 md5 = MD5.Create();
        private byte[] data;

        [Params(1000)]
        public int N;

        [GlobalSetup]
        public void Setup()
        {
            data = new byte[N];
            new Random(42).NextBytes(data);
        }

        [Benchmark]
        public byte[] Sha256()
        {
            Thread.Sleep(1);
            return sha256.ComputeHash(data);
        }

        [Benchmark]
        public byte[] Md5() => md5.ComputeHash(data);
    }
}