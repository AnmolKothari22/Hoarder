package config

type Config struct {
    Port         string
    DatabaseURL  string
    JWTSecret    string
    UploadDir    string
    MaxUploadSize int64
}