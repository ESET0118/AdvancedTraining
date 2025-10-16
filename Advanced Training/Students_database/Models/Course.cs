using System;
using System.Collections.Generic;

namespace Students_database.Models;

public partial class Course
{
    public int Id { get; set; }

    public string Subject { get; set; } = null!;
}
