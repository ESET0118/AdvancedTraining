namespace LINQ_Project
{
    public class Order    {
        public required int OrderId { get; set; }
        public int CustomerId { get; set; }
        public double Amount { get; set; }
        public DateTime OrderDate { get; set; }

    }
}
