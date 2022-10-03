<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Contrast
 * 
 * @property int $id
 * @property string $name
 * @property Carbon|null $created_at
 * @property Carbon $updated_at
 *
 * @package App\Models
 */
class Contrast extends Model
{
	protected $table = 'contrasts';

	protected $fillable = [
		'name'
	];
}
