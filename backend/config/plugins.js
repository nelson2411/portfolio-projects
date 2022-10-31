module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("CLOUDINARY_NAME"),
      api_key: env("CLOUDINARY_KEY"),
      api_secret: env("CLOUDINARY_SECRET"),
    },
    actionOptions: {
      upload: {
        // Upload to a folder in Cloudinary
        folder: env("CLOUDINARY_FOLDER"),
      },
      delete: {},
    },
  },
  // ...
});
