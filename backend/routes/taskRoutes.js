const express = require("express");
const router = express.Router();
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// CREATE TASK
router.post("/", async (req, res) => {
 const { title, userId } = req.body;

const { data, error } = await supabase
  .from("tasks")
  .insert([
    {
      title,
      assigned_to: userId,
      project_id: null,
      status: "pending"
    }
  ]);

  if (error) {
    console.log("❌ Supabase Error:", error);
    return res.status(400).json(error);
  }

  res.json(data); // ✅ FIXED
});

// GET TASKS
router.get("/:userId", async (req, res) => {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("assigned_to", req.params.userId);

  if (error) {
    console.log("Supabase Error:", error);
    return res.status(400).json(error);
  }

  res.json(data); // ✅ FIXED
});

// UPDATE TASK
router.put("/:id", async (req, res) => {
  const { status } = req.body;

  const { data, error } = await supabase
    .from("tasks")
    .update({ status })
    .eq("id", req.params.id);

  if (error) {
    console.log("Update error:", error);
    return res.status(400).json(error);
  }

  res.json(data);
});

module.exports = router;