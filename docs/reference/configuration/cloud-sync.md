# Cloud Synchronization

To enable cloud synchronization, add the `[sync]` section to your `oolong.toml`.

```toml
[sync]
host = "your_server_hostname_or_ip"
user = "your_username"
port = 22
private_key_path = "/home/<your_username>/.ssh/<your_private_key_file>"
```

| Option | Description |
|--------|-------------|
| host | Server IP address or hostname |
| user | Server user account name |
| port | Server SSH port |
| private_key_path | Path to your SSH private key file |

At this time, cloud sync only supports SSH key authentication.


<!-- TODO: explain how cloud sync system works, possible in a different page -->
