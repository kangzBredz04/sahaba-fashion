export const getCurrentUser = async (req, res) => {
  try {
    return res.json({
      status: "Berhasil",
      //   msg: `${req.user.username} sedang login`,
      //   data: req.user,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to retrieve current user data. User is not logged in",
    });
  }
};
