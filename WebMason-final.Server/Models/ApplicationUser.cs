﻿namespace WebMason_final.Server.Models
{
    public class ApplicationUser
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public ICollection<ServerOrder> ServerOrders { get; set; }
    }
}

