const express = require("express");
const router = express.Router();
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// CREATE PROJECT
router.post("/", async (req, res) => {
  const { name, userId } = req.body;

  const { data, error } = await supabase
    .from("projects")
    .insert([{ name, created_by: userId }]);

  if (error) {
    console.log(error);
    return res.status(400).json(error);
  }

  res.json(data);
});

// GET PROJECTS
router.get("/:userId", async (req, res) => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("created_by", req.params.userId);

  if (error) return res.status(400).json(error);

  res.json(data);
});

module.exports = router;